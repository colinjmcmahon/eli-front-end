"use client"

import { useState } from "react"

import { SCRIPT_ACTIONS } from "@/data/script-actions"

type ScriptRow = {
  id: number
  action: string
  objectData: string
}

const ACTION_DATALIST_ID = "script-action-options"

const primaryButtonClassName =
  "rounded-xl bg-[#C4B5FD] px-5 py-2.5 text-center text-sm font-semibold uppercase tracking-wide text-[#5B2C8A] transition-colors hover:bg-[#B794F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4B5FD]"

const addRowButtonClassName =
  "flex h-10 w-10 items-center justify-center rounded-xl bg-[#C4B5FD] text-xl font-medium leading-none text-[#5B2C8A] transition-colors hover:bg-[#B794F4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C4B5FD]"

const cellInputClassName =
  "w-full min-w-[10rem] border-0 bg-transparent px-6 py-5 text-sm font-normal text-[#172B4D] placeholder:text-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#C4B5FD]"

const CreateScriptPage = () => {
  const [rows, setRows] = useState<ScriptRow[]>([
    { id: 1, action: "", objectData: "" },
  ])
  const [nextId, setNextId] = useState(2)

  const handleSaveScript = () => {}

  const handleAddRow = () => {
    setRows((currentRows) => [
      ...currentRows,
      { id: nextId, action: "", objectData: "" },
    ])
    setNextId((currentId) => currentId + 1)
  }

  const handleActionChange = (rowId: number, value: string) => {
    setRows((currentRows) =>
      currentRows.map((row) =>
        row.id === rowId ? { ...row, action: value } : row,
      ),
    )
  }

  const handleObjectDataChange = (rowId: number, value: string) => {
    setRows((currentRows) =>
      currentRows.map((row) =>
        row.id === rowId ? { ...row, objectData: value } : row,
      ),
    )
  }

  return (
    <div className="flex min-h-full flex-1 flex-col bg-[#F5F6FA] px-6 py-10 font-sans sm:px-10">
      <main className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <h1 className="text-2xl font-bold text-zinc-900">Create Script</h1>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <datalist id={ACTION_DATALIST_ID}>
            {SCRIPT_ACTIONS.map((action) => (
              <option key={action} value={action} />
            ))}
          </datalist>

          <div className="overflow-hidden rounded-xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#F8F9FB]">
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.06em] text-[#5E6C84]"
                  >
                    Action
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.06em] text-[#5E6C84]"
                  >
                    Object / Data
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} className="bg-white">
                    <td className="p-0">
                      <input
                        type="text"
                        list={ACTION_DATALIST_ID}
                        className={cellInputClassName}
                        value={row.action}
                        aria-label={`Action for row ${row.id}`}
                        autoComplete="off"
                        placeholder="Select action"
                        onChange={(event) =>
                          handleActionChange(row.id, event.target.value)
                        }
                      />
                    </td>
                    <td className="p-0">
                      <input
                        type="text"
                        className={cellInputClassName}
                        value={row.objectData}
                        aria-label={`Object / Data for row ${row.id}`}
                        placeholder="Enter object / data"
                        onChange={(event) =>
                          handleObjectDataChange(row.id, event.target.value)
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-5">
            <button
              type="button"
              className={addRowButtonClassName}
              aria-label="Add row"
              onClick={handleAddRow}
            >
              +
            </button>
          </div>
        </section>

        <div>
          <button
            type="button"
            className={primaryButtonClassName}
            aria-label="Save Script"
            onClick={handleSaveScript}
          >
            Save Script
          </button>
        </div>
      </main>
    </div>
  )
}

export default CreateScriptPage
