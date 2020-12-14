<?php

namespace App\Http\Controllers\Admin;

use App\Tag;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdminTagController extends Controller
{
    
    public function index()
    {
        try {
            $tags = Tag::latest()->paginate(10);
            $user = auth()->user();


            return response()->json([
                'status' => 200,
                'tags' => $tags,
                'user' => $user,
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
                'name' => 'required'
            ]);

            $tag = $this->saveTag($request);

        
            return response()->json([
                'status' => 200,
                'tag' => $tag,
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'status' => 422,
                'message' => $e->getMessage(),
            ], 422);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $this->validate($request,[
                'name' => 'required'
            ]);

            $tag = $this->saveTag($request, $id);

            return response()->json([
                'status' => 200,
                'message' => 'success',
            ], 200);
        } catch (\Throwable $e) {
            return response()->json([
                'status' => 422,
                'message' => $e->getMessage(),
            ], 422);
        }
           
            
    }

    public function saveTag($request, int $id = null)
    {

        return Tag::updateOrCreate(
            [
                'id' => $id,
            ],
            [
                'name' => $request->name,
            ]

        );
    }

    public function delete($id)
    {
        try {
            $tag = Tag::findOrFail($id);
            $tag->delete();

        
            return response()->json([
                'status' => 200,
                'message' => 'success',
            ], 200);

        } catch (\Throwable $e) {
            return response()->json([
                'status' => 500,
                'message' => 'err',
            ], 500);
        }
    }
}
