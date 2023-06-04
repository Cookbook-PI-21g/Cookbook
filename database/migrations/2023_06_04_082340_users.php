<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Users extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // Schema::create('users', function(Blueprint $table){
        //     $table->id();
        //     $table->string('name')->nullable(false);
        //     $table->string('surname')->nullable(false);
        //     $table->text('password')->nullable(false);
        //     $table->text('email')->nullable(false);
        //     $table->string('remember_token');
        //     $table->boolean('email_verified')->default(0);
        //     $table->timestamp('email_verified_at');
        //     $table->timestamps();
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
