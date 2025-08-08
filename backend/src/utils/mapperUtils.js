/**
 * Generic mapper functions for DTO, Domain, and Persistence mapping
 */

/**
 * Simple shallow copy to DTO
 */
const toDTO = (domainObject) => {
    return domainObject ? { ...domainObject } : null;
};

/**
 * From DTO to entity
 * @param {Object} dto
 * @param {Function} entityFactory
 * @returns {Object|null}
 */
const fromDTO = (dto, entityFactory) => {
    return dto ? entityFactory(dto) : null;
};

export {
    toDTO,
    fromDTO
};
