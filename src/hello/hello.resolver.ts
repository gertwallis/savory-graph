import { Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class HelloResolver {

    @Query(returns => String)
    async hello() {
        console.log('This is it');
        return "Hello, There  ITALY"
    }

    @Query(returns => String)
    async Goodbye() {
        console.log('See Ya');
        return "Good night and goodbye"
    }
}