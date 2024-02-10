import { defineMongooseModel } from '#nuxt/mongoose'

export const PedigreeDog = defineMongooseModel('PedigreeDog', {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
        nullable: true,
    },
    imageSrc: {
        type: String,
        required: true,
        nullable: true,
    },
    gender: {
        type: String,
        required: true,
        nullable: true,
    },
    breed: {
        type: String,
        required: true,
        nullable: true,
    },
    birth: {
        type: String,
        required: true,
        nullable: true,
    },
    color: {
        type: String,
        required: true,
        nullable: true,
    },
    country: {
        type: String,
        required: true,
        nullable: true,
    },
    link: {
        type: String,
        required: true,
        nullable: true,
    }
});