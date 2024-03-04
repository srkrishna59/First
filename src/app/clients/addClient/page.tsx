"use client"
import ClientLayout from "@/components/clientLayout/ClientLayout"
import Layout1 from "@/components/layout/layout"
import { Accordion, AccordionItem, Button } from '@nextui-org/react';
import {Input} from "@nextui-org/react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import { useState } from 'react'
import {Select, SelectItem} from "@nextui-org/react";
import styles from './page.module.css'
import {country, state} from './data'
export default function AddClient (){
  const [file, setFile] = useState<File>()
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  const itemClasses = {
    base: "py-0 w-full",
    title: "font-bold text-large",
    trigger: "px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center",
    indicator: "text-medium",
    content: "text-small px-2",
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) return

    try {
      const data = new FormData()
      data.set('file', file)

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: data
      })
      // handle the error
      if (!res.ok) throw new Error(await res.text())
    } catch (e: any) {
      // Handle errors here
      console.error(e)
    }
  }
  return(
    <Layout1>
    <ClientLayout>
    <div className={styles.addClient}>
      <div>
      <Accordion  defaultExpandedKeys={["1"]} itemClasses={itemClasses}>
      <AccordionItem key="1" title="Company Details">
      <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Input size="md" type="text" label="Company Name" />
                  </div>
                  <div>
                    <Input size="md" type="number" label="Mobile Number"  />
                  </div>
                  <div>
                    <Input size="md" type="email" label="Phone Number" />
                  </div>
                  <div>
                    <Input size="md" type="email" label="Email ID" />
                  </div>
                  <div>
                    <Input size="md" type="email" label="Address" />
                  </div>
                  <div>
                    <Input size="md" type="email" label="City" />
                  </div>
                  <div>
                  <Select 
        label="Country" 
        className="max-w-xs" 
      >
        {country.map((count) => (
          <SelectItem key={count.value} value={count.value}>
            {count.label}
          </SelectItem>
        ))}
      </Select>
                  </div>
                  <div>
                  <Select 
        label="State" 
        className="max-w-xs" 
      >
        {state.map((states) => (
          <SelectItem key={states.value} value={states.value}>
            {states.label}
          </SelectItem>
        ))}
      </Select>
                  </div>
                  <div>
                    <Input size="md" type="email" label="Logo Upload" />
                    {/* <form onSubmit={onSubmit}>
      <input
        type="file"
        name="file"
        onChange={(e) => setFile(e.target.files?.[0])}
      />
      <input type="submit" value="Upload" />
    </form> */}
                  </div>
                </div>
      </AccordionItem>
      <AccordionItem  key="2"  title="Personal Details">
      <div className="grid grid-cols-3 gap-4">
                  <div>
                    <Input size="md" type="text" label="First Name" />
                  </div>
                  <div>
                    <Input size="md" type="text" label="Last Name"  />
                  </div>
                  <div>
                    <Input size="md" type="text" label="Middle Name"  />
                  </div>
                  <div>
                  <Input size="md" type="text" label="Mobile Number" />
                  </div>
                  <div>
                    <Input size="md" type="text" label="Phone Number" />
                  </div>
                  <div>
                    <Input size="md" type="email" label="Email ID"  />
                  </div>
                 
                  <div>
                    <Input size="md" type="text" label="City"  />
                  </div>
                  <div>
                  <Select 
        label="Country" 
        className="max-w-xs" 
      >
        {country.map((count) => (
          <SelectItem key={count.value} value={count.value}>
            {count.label}
          </SelectItem>
        ))}
      </Select>
                  </div>
                  <div>
                  <Select 
        label="State" 
        className="max-w-xs" 
      >
        {state.map((states) => (
          <SelectItem key={states.value} value={states.value}>
            {states.label}
          </SelectItem>
        ))}
      </Select>
                  </div>
                </div>
      </AccordionItem>
    </Accordion>
      </div>
<div className={styles.buttonGroup}>
<Button onPress={onOpen}>Discard</Button>
<Button onPress={onOpen}  color="primary">Add Client</Button>
</div>
<Modal 
        backdrop="opaque" 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: "easeIn",
              },
            },
          }
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Conform Action</ModalHeader>
              <ModalBody>
                <p> 
                Are you sure you want to do this. Once removed/changed you cannot reverse back
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Discard
                </Button>
                <Button color="primary" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
    </ClientLayout>
    </Layout1>
  )
}

