import mongoose from 'mongoose';
// An interface that describes the properties
// that are required to create a new User
interface UserAttrs {
    email: String,
    password: string
}

// An interface that describes the properties
// that a User Model has
interface UserModel extends mongoose.Model<UserDoc> {
    build(attrs: UserAttrs): UserDoc
}


// An interface that describes the properties
// that a User Doc has
interface UserDoc extends mongoose.Document {
    email: string,
    password: string
}
const userSchema = new mongoose.Schema({
    emial: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.build = (attrs: UserAttrs) => {
    return new User(attrs)
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

const user = User.build({
    email: 'asdasd',
    password: 'asdasdasd'
})


// این روش خیلی خوب نیست
// const User = mongoose.model('User', userSchema);

// const buildUser = (attrs: UserAttrs) => {
//     return new User(attrs)
// }

// export { User, buildUser }

