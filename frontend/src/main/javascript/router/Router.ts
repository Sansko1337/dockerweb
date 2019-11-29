import {UIRouterReact, servicesPlugin, pushStateLocationPlugin} from "@uirouter/react";
import {states} from "./States";

export const router = new UIRouterReact();
router.plugin(servicesPlugin);
router.plugin(pushStateLocationPlugin);

states.forEach(state => {
    return router.stateRegistry.register(state);
});
