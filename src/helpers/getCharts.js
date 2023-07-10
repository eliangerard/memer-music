export const getCharts = async () => {
    const chart = await fetch('http://localhost:3000/deezer/chart').then(res => res.json());
    return chart;
}
