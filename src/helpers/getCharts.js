import { server } from "./getServer";

export const getCharts = async () => {
    const chart = await fetch(server+'deezer/chart').then(res => res.json());
    return chart;
}
