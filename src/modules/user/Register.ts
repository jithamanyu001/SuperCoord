import { Arg, Mutation, Query, Resolver } from "type-graphql";
import * as bcrypt from "bcryptjs"
import { User } from "src/entity/User";
import { DeepPartial } from "typeorm";
@Resolver()
export class Registerzresolver{
    @Query(() => String)
  async helloWorld() {
    return "";
  }

  @Mutation(() => String)
  async register(
      @Arg("userName") username: string,
      @Arg("email") email: string,
      @Arg("password") password: string
  ): Promise<User>{
      const hashed=await bcrypt.hash(password,12);
        
      const user = {
          userName:username,
          email:email,
          password:hashed
      }
      const mainUser=await User.create(user).save()
    return mainUser;
  }
}