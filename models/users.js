var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    email: { type: String },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    salt: { type: String, required: true },
    name: { type: String, required: true },
    country_code: { type: String, required: true },
    phone: Number,
    classroom_id: String,
    grade: Number,//parent create
    source_type: String,
    school_name: String,//paren create
    school_id: mongoose.Schema.Types.ObjectId,//teacher student 
    isTeacherSiteadmin: Boolean,
    isTeacher: Boolean,
    isParent: Boolean,
    isStudent: Boolean,
    isContent: String,
    isEditAccessReviewer:Boolean,
    isSuperUser: { type: Boolean, default: false },
    verified_user: { type: Boolean, default: false },
    features: [mongoose.Schema.Types.ObjectId],//student
    student_access: [mongoose.Schema.Types.ObjectId],//parent[id]
    parent_access: [mongoose.Schema.Types.ObjectId],//student[id]
    classrooom_access: [mongoose.Schema.Types.ObjectId],//teacher[id]
    setting: Array,
    created_date: Date,
    modified_date: Date,
    avtar_id: mongoose.Schema.Types.ObjectId,
    consultant_id: String,
    reset_token: String,
    reset_token_timestamp: Date,
    pagination_rows: { type: Number, default: 10 }
});


mongoose.model('Users', UserSchema);

module.exports = mongoose.model('Users');