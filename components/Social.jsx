import { Youtube, Facebook, Linkedin, Github, Twitter } from "lucide-react";

const Social = ({ containerStyles, iconStyles }) => {
  const socials = [
    {
      icon: Youtube,
      path: "https://www.youtube.com/@arifsabirworshipper5010",
      label: "YouTube",
      color: "from-red-500 to-red-600",
      hoverColor: "hover:shadow-red-500/50",
    },
    {
      icon: Facebook,
      path: "https://www.facebook.com/arif.sabir1",
      label: "Facebook",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:shadow-blue-500/50",
    },
  ];

  // Default styles if none provided
  const defaultContainerStyles = "flex gap-4";
  const defaultIconStyles = "";

  return (
    <div className={containerStyles || defaultContainerStyles}>
      {socials.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <a
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className={`group relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-lg transition-all duration-300 hover:scale-110 hover:rotate-6 active:scale-95 ${item.hoverColor} hover:shadow-xl ${iconStyles}`}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon */}
            <IconComponent className="w-6 h-6 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />

            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-xl border-2 border-white/50 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
          </a>
        );
      })}
    </div>
  );
};

export default Social;
