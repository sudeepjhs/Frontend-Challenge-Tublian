import UserCard from "@/components/Card/usercard";
import Filter from "@/components/filter";
import Search from "@/components/search";
import { userDataList } from "@/data/dummy";

export default function Dashboard() {
  return (
    <section className="flex flex-nowrap flex-col gap-5 py-5 max-sm:max-w-[100vw]">
      <Search />
      <Filter />
      <section className="flex flex-col gap-4 lg:max-w-[calc(100vw-270px)] sm:max-w-[calc(100vw-110x)]">
        {userDataList.map((user, i) => (
          <UserCard
            key={user.profile.fullname + i}
            user={user.profile}
            userInfo={user.info}
          />
        ))}
      </section>
    </section>
  );
}
