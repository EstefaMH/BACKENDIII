import bcrypt from 'bcryptjs';

export function createHash(password) {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
}

export function passwordValidation(password, hashedPassword) {
    return bcrypt.compareSync(password, hashedPassword);
}