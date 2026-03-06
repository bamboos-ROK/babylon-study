import { useEffect, useRef } from "react";
import {
  Engine,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  MeshBuilder,
  Vector3,
} from "@babylonjs/core";

export default function MapViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);

    // 카메라: top-down perspective
    const camera = new ArcRotateCamera(
      "camera",
      -Math.PI / 2,
      Math.PI / 3,
      200,
      Vector3.Zero(),
      scene,
    );
    camera.attachControl(canvas, true);
    camera.lowerRadiusLimit = 10;
    camera.upperRadiusLimit = 1000;

    // 라이트
    new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    // 바닥 Grid
    const ground = MeshBuilder.CreateGround(
      "ground",
      { width: 100, height: 100 },
      scene,
    );
    ground.position.y = -0.01;

    engine.runRenderLoop(() => scene.render());
    window.addEventListener("resize", () => engine.resize());

    return () => {
      window.removeEventListener("resize", () => engine.resize());
      engine.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100vw", height: "100vh", display: "block" }}
    />
  );
}
