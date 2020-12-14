<?php

namespace App\Http\Controllers\Admin;

use App\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;

class AdminCategoryController extends Controller
{
    public function index()
    {
        try {
            $categories = Category::latest()->paginate(10);

            return response()->json([
                'status' => 200,
                'categories' => $categories,
            ], 200);

        } catch (\Throwable $e) {

            return response()->json([
                'status' => 422,
                'message' => $e->getMessage(),
            ], 422);
        }
    }
    public function store(Request $request)
    {
        try {

            $this->validate($request,[
                'name' => 'required',
               
            ]);

            $category = $this->saveCategory($request);
     
            return response()->json([
                'status'  => 200,
                'category'=> $category,
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'status' => 422,
                'message'=> $e->getMessage(),
            ], 422);
        }
    }

    public function update(Request $request, $id)
    {
       try {
            $this->validate($request,[
                'name' => 'required'
            ]);

            $category = Category::findOrFail($id);

            $filePath = $category->image_path;

            if(!empty($filePath)) {
                unlink('.'.$filePath);
            }



            $this->saveCategory($request, $id);

            return response()->json([
                'status' => 200,
                'message'=> 'success',
            ], 200);
            
       } catch (\Throwable $e) {
            return response()->json([
                'status' => 422,
                'message'=> $e->getMessage(),
            ], 422);
       }
    }

    public function saveCategory($request, int $id = null)
    {

        return Category::updateOrCreate(
            [
                'id' => $id,
            ],
            [
                'name' => $request->name,
                'image_path' => $request->image_path,
                'image_name' => $request->image_name,
                
            ]

        );
    }

    public function delete($id)
    {
        try {
            $category = Category::findOrFail($id);
            
            $filePath = $category->image_path;
            if(!empty($filePath)) {
                unlink('.'.$filePath);
            }
            $category->delete();
        
        
            return response()->json([
                'status' => 200,
                'message' => 'success',
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'status' => 500,
                'message' => $e->getMessage(),
            ], 500);
        }
    }

    public function upload(Request $request)
    {
        $this->validate($request, [
            'file' => 'required|mimes:jpeg,jpg,png',
        ]);
        $file = $request->file;

        $fileNameOrigin = $file->getClientOriginalName();

        $fileNameHash = Str::random(20) . '.' . $file->extension();

        $path = $request->file->storeAs('public/' . 'category' . '/' . 'guest', $fileNameHash);

        $data = [
            'file_name' => $fileNameOrigin,
            'file_path' => $url = Storage::url($path),
        ];

        return $data;
    }

    public function deleteImage(Request $request)
    {
        //$filePath = $request->imagePath;
        dd($request->all());

        if(!empty($filePath)) {
            unlink('.'.$filePath);
        }

        return response()->json([
            'message' => 'success'
        ], 200);
    }

    
}
