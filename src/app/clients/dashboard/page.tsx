"use client"
import React from "react";
import ClientLayout from "@/components/clientLayout/ClientLayout"
import Layout1 from "@/components/layout/layout"
import { Button } from "@nextui-org/react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";
import { columns, users } from "./data";
import {EditIcon} from "@/components/clientFiles/EditIcon"
import {DeleteIcon} from "@/components/clientFiles/DeleteIcon"
import {EyeIcon} from "@/components/clientFiles/EyeIcon"
import { useRouter } from "next/navigation";
import styles from './page.module.css'

// Define types for the User object and the column keys
interface User {
  id: number;
  name: string;
  email: string;
  avatar: string;
  role: string;
  team: string;
  poc?: string;
  status: string;
}

type ColumnKey = keyof User | "actions";;
type ChipColor = "success" | "danger" | "warning" | "default" | "primary" | "secondary";

const statusColorMap: Record<string, ChipColor> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};
export default function DashBoard (){
  const router = useRouter()
  const renderCell = React.useCallback((user: User, columnKey: ColumnKey) => {
     // Check if the columnKey is 'actions' and handle it separately
  if (columnKey === 'actions') {
    return (
      <div className="relative flex items-center gap-2">
        <Tooltip content="Details">
          <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
            <EyeIcon />
          </span>
        </Tooltip>
        <Tooltip content="Edit user">
          <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
            <EditIcon />
          </span>
        </Tooltip>
        <Tooltip color="danger" content="Delete user">
          <span className="text-lg text-danger cursor-pointer active:opacity-50">
            <DeleteIcon />
          </span>
        </Tooltip>
      </div>
    );
  }else {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{radius: "lg", src: user.avatar}}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
          </div>
        );
      case "poc":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{user.name}</p>
            <p className="text-bold text-sm capitalize text-default-400">{user.role}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize"  color={statusColorMap[user.status]}  size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      // case "actions":
      //   return (
      //     <div className="relative flex items-center gap-2">
      //       <Tooltip content="Details">
      //         <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
      //           <EyeIcon />
      //         </span>
      //       </Tooltip>
      //       <Tooltip content="Edit user">
      //         <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
      //           <EditIcon />
      //         </span>
      //       </Tooltip>
      //       <Tooltip color="danger" content="Delete user">
      //         <span className="text-lg text-danger cursor-pointer active:opacity-50">
      //           <DeleteIcon />
      //         </span>
      //       </Tooltip>
      //     </div>
      //   );
      default:
        return cellValue;
    }
  }
  }, []);
  return(
    <Layout1>
    <ClientLayout>
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <h3 className="text-2xl font-bold text-gray-800>">Client List</h3>
<Button onClick={() => router.push("/clients/addClient")}>Add Client</Button>
      </div>
      <div className={styles.tableContainer}>
     <Table selectionMode="multiple" aria-label="Example table with custom cells">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={users as User[]}>
        {(item: User) => (
          <TableRow key={item.id}>
         {columns.map((column) => (
                      <TableCell key={column.uid}>{renderCell(item, column.uid as ColumnKey)}</TableCell>
                    ))}
          </TableRow>
        )}
      </TableBody>
    </Table>
      </div>
    </div>
    </ClientLayout>
    </Layout1>
  )
}