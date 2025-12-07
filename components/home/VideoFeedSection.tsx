import { Play, Heart, MessageCircle, Share2 } from "lucide-react";
import Image from "next/image";

const videos = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=600&fit=crop",
    title: "My Journey to Harvard",
    views: "125K",
    likes: "8.5K",
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=600&fit=crop",
    title: "First Week in Melbourne",
    views: "98K",
    likes: "6.2K",
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=600&fit=crop",
    title: "Campus Tour - London",
    views: "156K",
    likes: "12K",
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=600&fit=crop",
    title: "Scholarship Tips",
    views: "234K",
    likes: "18K",
  },
  {
    id: 5,
    thumbnail: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&h=600&fit=crop",
    title: "Visa Interview Guide",
    views: "189K",
    likes: "14K",
  },
];

const VideoFeedSection = () => {
  return (
    <section className="py-16 md:py-24 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-accent text-accent-foreground px-4 py-1 text-sm font-medium mb-4">
            📱 Follow Our Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Student Stories & Tips
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch success stories and helpful tips from our students on their study abroad journey.
          </p>
        </div>

        {/* Video Grid - Instagram/TikTok Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative aspect-9/16 bg-card border-2 border-border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <Image
                src={video.thumbnail}
                width={400}
                height={600}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-foreground/90 via-transparent to-transparent" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 bg-primary-foreground/90 flex items-center justify-center">
                  <Play className="w-8 h-8 text-foreground fill-foreground" />
                </div>
              </div>

              {/* Video Info */}
              <div className="absolute bottom-0 left-0 right-0 p-3 text-primary-foreground">
                <p className="font-medium text-sm mb-2 line-clamp-2">{video.title}</p>
                <div className="flex items-center gap-3 text-xs">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3" /> {video.likes}
                  </span>
                  <span>{video.views} views</span>
                </div>
              </div>

              {/* Social Icons - Right Side */}
              <div className="absolute right-2 bottom-20 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-8 h-8 bg-primary-foreground/80 flex items-center justify-center hover:bg-primary-foreground transition-colors">
                  <Heart className="w-4 h-4 text-foreground" />
                </button>
                <button className="w-8 h-8 bg-primary-foreground/80 flex items-center justify-center hover:bg-primary-foreground transition-colors">
                  <MessageCircle className="w-4 h-4 text-foreground" />
                </button>
                <button className="w-8 h-8 bg-primary-foreground/80 flex items-center justify-center hover:bg-primary-foreground transition-colors">
                  <Share2 className="w-4 h-4 text-foreground" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="#"
            className="flex items-center gap-2 bg-card border-2 border-border px-6 py-3 font-medium transition-all hover:shadow-sm hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
            </svg>
            Instagram
          </a>
          <a
            href="#"
            className="flex items-center gap-2 bg-card border-2 border-border px-6 py-3 font-medium transition-all hover:shadow-sm hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            TikTok
          </a>
          <a
            href="#"
            className="flex items-center gap-2 bg-card border-2 border-border px-6 py-3 font-medium transition-all hover:shadow-sm hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoFeedSection;
