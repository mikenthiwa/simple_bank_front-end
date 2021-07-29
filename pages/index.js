import {useRouter} from "next/router";
import {BaseLayout} from "../components/base-layout/base-layout.component";

export default function Home() {
  const router = useRouter();
  return (
    <BaseLayout router={router} activeNav='Banking'>
        This is the content
    </BaseLayout>
  )
}

