import IconCloud from "./ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "express",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
];

function IconCloudDemo() {
  return (
    <div className="relative flex flex-col items-center max-w-lg mx-auto bg-transparent">
      {/* Remove or replace IconCloud if needed */}
      {/* <IconCloud iconSlugs={slugs} /> */}

      {/* Display remaining skills as a grid */}
      <div className="grid grid-cols-4 gap-4 p-6">
        {slugs.map((slug) => (
          <div key={slug} className="flex flex-col items-center">
            <img src={`/icons/${slug}.svg`} alt={slug} className="w-10 h-10" />
            <span className="text-sm text-white">{slug}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IconCloudDemo;
