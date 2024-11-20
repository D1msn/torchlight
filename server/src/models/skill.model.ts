import {model, Schema} from "mongoose";

const SkillSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    image: {
        type: String,
        required: true,
    },
    updatedAt: {
        type: Date,
    },
    tags: [{
        type: String,
        required: true,
        lowercase: true,
        enum: ["снаряд",
            "поддержка",
            "атака",
            "навесной выстрел",
            "область",
            "ближний бой",
            "заклинание",
            "физический",
            "холод",
            "огонь",
            "молния",
            "мобильность",
            "продолжение",
            "эрозия",
            "цепь",
            "прямой выстрел",
            "часовой",
            "обстрел",
            "теневой удар",
            "наведение",
            "разрубание",
            "крушитель",
            "восстановление",
            "терра",
            "лазер",
            "призыв",
            "маг духов",
            "синтетический отряд",
            "активация",
            "защитный",
            "боевой клич",
            "проклятье",
            "заграждение",
            "наделить",
            "аура"]
    }]
}, {timestamps: true})

export const Skill = model('Skill', SkillSchema)
