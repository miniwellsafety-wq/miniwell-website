import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full bg-[#fcfbf8] sm:px-6 lg:px-8 sm:py-8">
      <div className="relative bg-[#341b0e] sm:rounded-3xl overflow-hidden shadow-2xl min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-[500px]">

            <div className="w-full lg:w-[45%] flex flex-col space-y-7 py-10 lg:py-14">
              
              <div className="flex items-center space-x-2 text-white font-bold text-xs tracking-widest uppercase">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span>Welcome to Miniwell fire safety solutions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-white leading-[1.1] tracking-tight">
                Protecting lives with<br />
                trusted fire safety
              </h1>

              <p className="text-gray-300 text-base max-w-sm leading-relaxed">
                We provide reliable fire safety solutions including alarm systems, extinguisher services, emergency planning.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/contact-us"
                  className="group flex items-center bg-[#BE0201] hover:bg-[#9A0201] text-white font-semibold rounded-full pl-6 pr-2 py-2 transition-all duration-300"
                >
                  <span>Get a Free Quote</span>
                  <div className="ml-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#BE0201] group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4" strokeWidth={3} />
                  </div>
                </Link>

                <Link
                  href="/contact-us"
                  className="group flex items-center bg-[#BE0201] hover:bg-[#9A0201] text-white font-semibold rounded-full pl-6 pr-2 py-2 transition-all duration-300"
                >
                  <span>Speak to an Expert</span>
                  <div className="ml-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#BE0201] group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4" strokeWidth={3} />
                  </div>
                </Link>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center text-white text-sm">
                  <span>Google Rating</span>
                  <span className="font-bold text-yellow-400 ml-1">5.0</span>
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-white text-sm">Based on 50 Reviews</div>
              </div>
            </div>

            <div className="w-full lg:w-[55%] relative self-end flex justify-end">
              
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="absolute w-[460px] h-[460px] rounded-full border-[28px] border-[#BE0201]/10" />
                <div className="absolute w-[320px] h-[320px] rounded-full border-[28px] border-[#BE0201]/10" />
                <div className="absolute w-[180px] h-[180px] rounded-full border-[28px] border-[#BE0201]/10" />
              </div>

              <div className="relative w-full max-w-[650px] h-[380px] sm:h-[480px] lg:h-[530px] z-10">
                <Image
                  src="https://demo.awaikenthemes.com/firegard/fire-services/wp-content/uploads/2025/04/hero-img.png"
                  alt="Fire safety expert holding fire extinguisher"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>

              <div className="absolute top-[28%] left-0 bg-[#BE0201] p-3 sm:p-4 rounded-2xl shadow-xl z-20">
                <div className="flex -space-x-2 mb-2">
                  {["11", "32", "44", "68"].map((imgId, i) => (
                    <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-[#BE0201] bg-gray-200 overflow-hidden relative">
                      <Image 
                        src={`https://i.pravatar.cc/100?img=${imgId}`} 
                        alt="Expert avatar" 
                        fill
                        className="object-cover" 
                      />
                    </div>
                  ))}
                </div>
                <p className="text-white text-xs font-semibold">Talk to our 4+ Experts</p>
              </div>

              <div className="absolute bottom-6 right-0 bg-[#BE0201] py-2 px-4 sm:py-3 sm:px-5 rounded-full shadow-xl flex items-center gap-2 sm:gap-3 z-20 hover:scale-105 transition-transform">
                <div className="bg-white p-1.5 sm:p-2 rounded-full text-[#BE0201]">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" />
                </div>
                <div>
                  <p className="text-white font-bold leading-none text-sm sm:text-base">35 +</p>
                  <p className="text-white/90 text-xs mt-0.5 sm:mt-1">satisfied clients</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}