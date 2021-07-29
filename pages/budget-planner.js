import {BaseLayout} from "../components/base-layout/base-layout.component";
import {useRouter} from "next/router";


export default function BudgetPlanner () {
    const router = useRouter();
    return (
        <BaseLayout router={router} activeNav='Budgetplanner'>

        </BaseLayout>
    )
}
