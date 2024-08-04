import { handleUpdate } from "@/lib/actions/user-action";
import { getUserById, updatUserById } from "@/lib/api";

interface IProps {
  params: { id: number };
}

export default function Page({ params }: IProps) {
   const user=getUserById(params.id)
   console.log(user)
  return (
    <div>
      <h1 className="is-size-3">Edit User No.{params.id}</h1>
      <div className="columns">
        <div className="column is-fifths my-4">
          <form className="box" action={handleUpdate.bind(null,params.id)}>
            <div className="field my-4">
              <input
                type="text"
                className="input is-link is-rounded"
                name="name"
                placeholder="enter a name"
                defaultValue={user.name}
              />
            </div>
            <div className="field my-4">
              <input
                type="text"
                className="input is-link is-rounded"
                name="surname"
                placeholder="enter a surname"
                defaultValue={user.surname}
              />
            </div>
            <div className="field my-4">
              <input
                type="text"
                className="input is-link is-rounded"
                name="username"
                placeholder="enter a username"
                defaultValue={user.username}
              />
            </div>
            <div className="field my-4">
              <input
                type="text"
                className="input is-link is-rounded"
                name="salary"
                placeholder="enter a salary"
                defaultValue={user.salary}
              />
            </div>
            <button className="button is-link">Edit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
