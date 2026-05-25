"use client";

import { useEffect } from "react";

export function ConsoleEasterEgg() {
  useEffect(() => {
    const accent = "color:#22d3ee;font-weight:bold;font-size:13px";
    const dim = "color:#94a3b8;font-size:12px";
    const flag = "color:#a78bfa;font-weight:bold;font-size:12px";

    /* eslint-disable no-console */
    console.log(
      "%c " +
        "\n   __     __    _                       _   _     \n" +
        "   \\ \\   / /_ _| |____      ____ _ _ __ | |_| |__  \n" +
        "    \\ \\ / / _` | '_ \\ \\ /\\ / / _` | '_ \\| __| '_ \\ \n" +
        "     \\ V / (_| | | | \\ V  V / (_| | | | | |_| | | |\n" +
        "      \\_/ \\__,_|_| |_|\\_/\\_/ \\__,_|_| |_|\\__|_| |_|\n",
      accent
    );
    console.log("%cSecurity Engineer · Penetration Tester · AI Security Researcher", dim);
    console.log(
      "%cPoking around the console? Good instinct. %cFLAG{curiosity_is_the_first_exploit}",
      dim,
      flag
    );
    console.log("%cLike what you see? Let's talk: yaswanthrs007@gmail.com", dim);
    /* eslint-enable no-console */
  }, []);

  return null;
}
