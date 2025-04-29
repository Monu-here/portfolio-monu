import React from "react";
import { ArrowDown, Code, Database, Server } from "lucide-react";

interface HeroSectionProps {
  darkMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ darkMode }) => {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center pt-16"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1920)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div
        className={`absolute inset-0 ${darkMode ? "bg-gray-950/80" : "bg-gray-900/70"
          }`}
      ></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="animate-fadeIn">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
                <span className="block">Hi, I'm Monu Kumar Thakur</span>
                <span className="text-red-600">Laravel Developer</span>
              </h1>

              <p className="text-lg md:text-xl mb-8 text-gray-200">
                I build robust, scalable web applications using clean code and
                modern development techniques. I specialize in Laravel, RESTful
                APIs, and efficient database architecture.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-red-400">
                  <Server className="mr-2" size={20} />
                  <span className="font-medium">RESTful APIs</span>
                </div>
                <div className="flex items-center text-red-400">
                  <Database className="mr-2" size={20} />
                  <span className="font-medium">Database Design</span>
                </div>
                <div className="flex items-center text-red-400">
                  <Code className="mr-2" size={20} />
                  <span className="font-medium">Clean Architecture</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-md transition-colors shadow-md"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md transition-colors shadow-md backdrop-blur-sm"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md p-1 rounded-xl overflow-hidden bg-gradient-to-br from-red-500 to-red-700">
              <div className="rounded-lg overflow-hidden p-8 bg-gray-900/95 backdrop-blur-sm">
                <pre className="font-mono text-sm text-gray-300">
                  <code>{`<?php

namespace App\\Http\\Controllers;

use App\\Models\\Project;
use Illuminate\\Http\\Request;
use App\\Http\\Resources\\ProjectResource;

class ProjectController extends Controller
{
    /**
     * Display a listing of projects.
     */
    public function index()
    {
        $projects = Project::pagination(10);
        return $projects;
    }
    
    // More controller methods...
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#projects"
            className="p-2 rounded-full text-white hover:text-red-400 transition-colors"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
