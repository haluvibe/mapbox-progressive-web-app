import dynamic from "next/dynamic";

const Camera = dynamic(() => import("../components/Camera"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <main>
        <Camera />
      </main>
    </div>
  );
}
