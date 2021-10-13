import React, { useState } from "react";

import { ProjectItem } from "./work-item";
import { PROJECTS } from "../../mock/Projects";
import Modal from "../../shared/UIelement/Modal";
import { MODAL } from "../../mock/modalDes";
//import ReactModal from 'react-modal';
import { Content } from "../description";

export const Projects = () => {
  const [showModal, setshowModal] = useState(false);
  const [modalIsOpen, setmodalIsOpen] = useState<string | null>(null);

  const openModalHandler = (title: string) => {
    setmodalIsOpen(title);
    setshowModal(true);
  };

  const closeModalHandler = () => setshowModal(false);

  return (
    <section className="pb-6">
      <div className="">
        <h1 className="text-titleMauve font-title text-3xl mb-10">Work</h1>

        <Modal
          show={showModal}
          onCancel={closeModalHandler}
          onKeyPress={closeModalHandler}
          className={"relative"}
        >
          {modalIsOpen ? (
            <Content
              data={
                MODAL.find(({ title }) => {
                  return title === modalIsOpen;
                })!
              }
              onClick={closeModalHandler}
              onKeyPress={closeModalHandler}
            />
          ) : null}
        </Modal>

        <div className="flex md:flex-row flex-col justify-between xl:w-p826 lg:mb-25">
          {PROJECTS.map((item) => {
            const { image, title, description, alt } = item;
            return (
              <ProjectItem
                key={title}
                image={image}
                title={title}
                description={description}
                alt={alt}
                onClick={() => {
                  openModalHandler(title);
                }}
                onKeyPress={() => {
                  openModalHandler(title);
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
