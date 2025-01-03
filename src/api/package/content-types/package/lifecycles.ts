import { fill } from "../../services/fields";

export default {
    beforeUpdate(event) {
        const { data } = event.params;
        event.params.data = fill(data);
    },
    beforeCreate(event) {
        const { data } = event.params;
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