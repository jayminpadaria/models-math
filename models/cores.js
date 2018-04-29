var mongoose = require('mongoose');
var CoreSchema = new mongoose.Schema({
    schools: [{
        name: String,
        grades: Array,
        package_id: String,
        classrooms: [new mongoose.Schema({
            name: String,
            grade: Number,
            subject: String,
            no_of_student: Number,
            curriculum: String,
            settings: Array
        })]
    }],
    features: [new mongoose.Schema({
        name: String,
        price: Number,
        grades: Array
    })],
    sources: [new mongoose.Schema({
        name: String,
        package_id: mongoose.Schema.Types.ObjectId
    })],
    packages: [new mongoose.Schema({
        name: String,
        features: [mongoose.Schema.Types.ObjectId]
    })],
    subscriptions: [new mongoose.Schema({
        name: String,
        duration: Number
    })],
    consultants: [new mongoose.Schema({
        name: String,
        email: String,
        code: String
    })],
    avatars: [new mongoose.Schema({
        name: String,
        energy_points: Number,
        src: String
    })],
    modules: [new mongoose.Schema({
        name: String
    })],
    topics: [new mongoose.Schema({
        name: String,
    })],
    sub_topics: [new mongoose.Schema({
        name: String
    })],
    learning_objectives: [new mongoose.Schema({
        group: String,
        objectives: [new mongoose.Schema({
            name: String
        })]

    })],
    question_type: [{
        name: String,
        sub_type: [new mongoose.Schema({
            name: String,
            level: Number
        })]
    }],

    curriculum: [new mongoose.Schema({
        name: String,
        grades: [new mongoose.Schema({
            chapter: [new mongoose.Schema({
                name: String,
                module: [({
                    module_id: String,
                    level: String,
                    topics: [new mongoose.Schema({
                        topic_id: String,
                        learning_objectives: [new mongoose.Schema({
                            learning_objectives_id: String
                        })]

                    })]
                })],
            })]
        })],
    })],
    strands: [new mongoose.Schema({
        curriculum_id: mongoose.Schema.Types.ObjectId,
        grade: Number,
        name: String,
        description: String
    })],
    country: [new mongoose.Schema({
        code: String,
        name: String,
        languages: [{
            code: String,
            name: String
        }]
    })]
});

mongoose.model('Cores', CoreSchema);

module.exports = mongoose.model('Cores');