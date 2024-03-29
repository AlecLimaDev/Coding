import { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { myChannel } from "../../../Youtube/services/MyChannel/fetch-data-base-url";
interface Video {
  snippet: {
    publishedAt: string;
    position: number;
    id: number;
    videoOwnerChannelId: string;
    channelId: string;
    title: string;
    description: string;
    playlistId: string;
    resourceId: {
      videoId: string;
    };
    thumbnails: {
      default: {
        width: number;
        height: number;
      };
      maxres: {
        url: string;
        height: number;
        width: number;
      };
    };
  };
}

export function useAbout() {
  const [apiData, setApiData] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    const controller = new AbortController();
    async function fetchData() {
      try {
        const { data } = await myChannel.get("/playlistItems", {
          signal: controller.signal,
        });
        console.log(data.items);
        setApiData(data.items);
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
          throw new Error("Error na requisição " + error);
        }
      }
    }
    fetchData();

    return () => {
      console.log("cancelando...");
      controller.abort();
      clearTimeout(timer);
    };
  }, []);

  return {
    loading,
    apiData,
  };
}
