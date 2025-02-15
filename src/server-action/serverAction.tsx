'use server'
import sql from 'better-sqlite3'
import {revalidatePath} from "next/cache";
const db=sql("meals.db")
const saveMeal = async (formData:FormData) => {
    // console.log(formData)
    // console.log('serverAction')
    const titleValue=formData.get('title')
    db.prepare(`insert into meals(title) values(?)`).run(titleValue)
    revalidatePath('/')
};
export const getMeals=async ():Promise<{id:number,title:string}[]>=>{
return db.prepare<{id:number,title:string}[]>('select * from meals').all() as {id:number,title:string}[]
}

export default saveMeal;