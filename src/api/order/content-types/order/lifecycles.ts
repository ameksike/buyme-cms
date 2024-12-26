import { fill } from "../../services/fields";

export default {
    beforeCreate(event) {
        const { data, where, select, populate } = event.params;
        event.params.data = fill(data);
    },
    afterFindOne(event) {
        const { params, result } = event;
        if (strapi.admin && params.populate) {
            //params.populate.push('*');
            event.result = fill(result);
        }
    },
};