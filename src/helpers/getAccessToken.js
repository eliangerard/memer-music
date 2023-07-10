export const grantLogin = async (code) => {
    const res = await fetch('http://localhost:3000/oauth?code='+code).then(res => res.json());
    return res;
}