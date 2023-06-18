export const getapi = async (url:string) => {
    const data = await fetch(url, {
        method: "GET"
    });
const jsonData = await data.json();
return jsonData

}