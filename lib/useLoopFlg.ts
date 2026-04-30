import { useEffect, useState } from "react";

export default function useLoopFlg(defaltFlg: boolean, interval: number) {
  const [flg, setFlg] = useState(defaltFlg);

  useEffect(() => {
    const timer = window.setInterval(() => setFlg((v) => !v), interval);

    return () => {
      window.clearInterval(timer);
    };
  }, [interval]);

  return flg;
}
