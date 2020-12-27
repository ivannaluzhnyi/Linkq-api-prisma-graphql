const { forwardTo } = require("prisma-binding");

const {
    permissionMiddleware,
    checkByWhere,
    isAdmin,
} = require("../../utils/permission");
const { getUser } = require("../../utils/helpers.resolvers");

async function event(parent, args, ctx, info) {
    const user = await getUser(ctx);

    permissionMiddleware(checkByWhere(user, args));
    return await ctx.prisma.query.account({ where: { id: user.id } });
}

async function events(parent, args, ctx, info) {
    const user = await getUser(ctx);

    permissionMiddleware(isAdmin(user.roles));
    return forwardTo("prisma")(parent, args, ctx, info);
}

module.exports = { event, events };