"use client";

import { useState } from "react";
import Edit from "./Edit";
import Delete from "./Delete";
import { BlogCategory } from "@/lib/generated/prisma";
import { Edit2, MoreVerticalIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function List({ blogCategories }: { blogCategories: BlogCategory[] | undefined }) {
  const [isEdit, setIsEdit] = useState<string | null>(null);

  return (
    <div>
      <h2 className="font-semibold text-xl mb-4">Blog Category List</h2>
      {blogCategories?.map((category: BlogCategory) => (
        <div key={category.id} className="flex items-center gap-2 mb-1">
          <div className="w-full">
            {isEdit === category.id ? (
              <Edit category={category} setIsEdit={setIsEdit} />
            ) : (
              <div
                className={`${category.isDefault ? "opacity-50 pointer-none" : "cursor-text"} border py-2 px-3 rounded-lg border-gray-200 w-full`}
                onClick={() => {
                  if (!category.isDefault) setIsEdit(category.id);
                }}
              >
                {category.name}
              </div>
            )}
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild disabled={category.isDefault}>
                <Button variant="outline" size={"icon-lg"} aria-label="options">
                  <MoreVerticalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuGroup className="space-y-2">
                  <DropdownMenuLabel>Options</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Button
                      onClick={() => setIsEdit(category.id)}
                      size="sm"
                      variant={"ghost"}
                      className="justify-start w-full"
                    >
                      <Edit2 />
                      Edit
                    </Button>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Delete category={category} />
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {/* {isEdit !== category.id ? (
            <div className="flex items-center gap-2">
              <Button
                size="icon"
                type="button"
                aria-label="Edit"
                onClick={() => setIsEdit(category?.id)}
                disabled={category.isDefault}
              >
                <FaPenToSquare />
              </Button>
              <Delete category={category} />
            </div>
          ) : null} */}
        </div>
      ))}
    </div>
  );
}
