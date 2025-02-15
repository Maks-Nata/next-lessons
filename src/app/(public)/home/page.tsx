import saveMeal, {getMeals} from "@/server-action/serverAction";
import Form from "next/form";

export default async function Home() {
    const mealsArray=await getMeals()
    return (
        <div>
            bland M
            <Form action={saveMeal}>
                <input type="text" name={'title'}/>
                <button>submit</button>
            </Form>
            <div className={'meal'}>
                {
                    mealsArray.map(meal=>(<div key={meal.id}>{meal.title}</div>))
                }
            </div>
        </div>
    );
};

