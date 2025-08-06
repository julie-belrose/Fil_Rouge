const createTreatmentCenterDto = (data) => {
        const schema = module.exports.createSchema;
        const { error, value } = schema.validate(data);
        if (error) {
            throw error;
        }
        return value;
};

const updateTreatmentCenterDto = (data) => {
        const schema = module.exports.updateSchema;
        const { error, value } = schema.validate(data);
        if (error) {
            throw error;
        }
        return value;
};