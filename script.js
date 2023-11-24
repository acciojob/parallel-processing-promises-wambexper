//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

let file1 = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(images[0].url);
	}.2000)
})
let file2 = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(images[1].url);
	}.1000)
})
let file3 = new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(images[2].url);
	}.3000)
})
let i = 1;
let x = Promise.all([file1,file2,file3]);
x.then(images=>{
	images.forEach((image)=>{
		const a = document.createElement("a");
        a.href = image;
		a.setAttribut('download', `${i}`);
		i++;
		output.appenchChild(a);
	})
	
})






