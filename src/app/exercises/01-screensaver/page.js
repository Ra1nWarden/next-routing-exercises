import React from "react";
import Link from "next/link";

function ScreenSaverExercise() {
  return (
    <main>
      <p>Choose your color:</p>
      <ul>
        <li>
          <Link href="/exercises/01-screensaver/red">Red</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/lime">Lime</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/aqua">Aqua</Link>
        </li>
        <li>
          <Link href="/exercises/01-screensaver/blueviolet">Blue Violet</Link>
        </li>
      </ul>
    </main>
  );
}

export default ScreenSaverExercise;
