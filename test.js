import Replicate from "replicate";
import { writeFile, readFile } from "node:fs/promises";
import { REPLICATE_API_TOKEN } from "./config.js";

// Read the file and convert it to a base64 string
const file = await readFile("./Voicy_You Look Fruity.wav");

// Prepare the input
const input = {
    gen_text: "Hi my name is Charles, and I am at Sundai club right now",
    ref_text: "you look fruity",
    ref_audio: "https://drive.google.com/uc?export=download&id=1pOvnyq4HcYLbVuHwLpnIjEFIP5wvM8NF"

};

const replicate = new Replicate({ auth: REPLICATE_API_TOKEN });

const output = await replicate.run(
    "x-lance/f5-tts:87faf6dd7a692dd82043f662e76369cab126a2cf1937e25a9d41e0b834fd230e",
    { input }
);

await writeFile("output.wav", output);
console.log("Saved output.wav");
