import { PedigreeDog } from "~~/models/PedigreeDog";

interface DogData {
    [key: string]: any; // Define a more specific type if possible for better type checking
}

export default defineEventHandler(async (event) => {
    const dogs = await PedigreeDog.find();

    const parsed = dogs.reduce((acc: DogData, dog) => {
        const dogObject = dog.toObject(); // Convert mongoose document to plain object
        const { id, ...restOfData } = dogObject;

        acc[id.toString()] = restOfData; // Now TypeScript knows acc can have string-indexed properties

        return acc;
    }, {} as DogData); // Initialize acc as DogData type

    return parsed;
});
