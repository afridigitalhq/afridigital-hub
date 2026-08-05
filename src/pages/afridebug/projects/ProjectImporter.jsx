import { useState } from "react";
import { intakeRepository } from "../runtime/services/RepositoryIntakeService";

export default function ProjectImporter(){

  const [projectName,setProjectName]=useState("");
  const [result,setResult]=useState(null);

  function handleImport(){

    const response=intakeRepository({
      name:projectName || "Untitled Project",
      source:"manual-import"
    });

    setResult(response);

  }

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-zinc-300 space-y-4">

      <h2 className="text-lg font-semibold">
        Repository Intake
      </h2>

      <input
        value={projectName}
        onChange={(e)=>setProjectName(e.target.value)}
        placeholder="Project name"
        className="w-full rounded-lg bg-zinc-800 p-2 text-sm"
      />

      <button
        onClick={handleImport}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm"
      >
        Import Project
      </button>

      {result && (
        <div className="rounded-lg bg-zinc-800 p-3 text-sm">
          <p>
            Project ID: {result.project.id}
          </p>
          <p>
            Investigation Stage: {result.investigation.stage}
          </p>
        </div>
      )}

    </div>
  );
}
