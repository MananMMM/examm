"use client"

import { handleAdd } from "@/lib/actions/user-action";
import { useActionState } from "react";

export default function Page() {
  const [state, handleAddAction] = useActionState(handleAdd, { message: "" });

  return (
    <div>
      <h1 className="is-size-3">Add Course</h1>
      <div className="columns">
        <div className="column is-fifths my-4">
          <form className="box" action={handleAddAction}>
            {state?.message && <p style={{color:'red'}}>{state.message}</p>}
            <div className="field my-4">
              <input
                type="text"
                className="input is-link is-rounded"
                name="name"
                placeholder="enter a name"
              />
            </div>
            <div className="field my-4">
              <input
                type="text"
                className="input is-link is-rounded"
                name="surname"
                placeholder="enter a surname"
              />
            </div>
            <div className="field my-4">
              <input
                type="text"
                className="input is-link is-rounded"
                name="username"
                placeholder="enter a username"
              />
            </div>
            <div className="field my-4">
              <input
                type="text"
                className="input is-link is-rounded"
                name="salary"
                placeholder="enter a salary"
              />
            </div>
            <button className="button is-link">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}
