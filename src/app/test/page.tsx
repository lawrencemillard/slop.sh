import SkyblockProfile from "@/components/SkyblockProfile";

export default function SkyblockPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        My{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Hypixel Skyblock
        </span>{" "}
        Profile
      </h1>
      <SkyblockProfile />
    </div>
  );
}
