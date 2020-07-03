import React, { useState } from 'react';

import { ProjectItem } from './work-item';
import { PROJECTS } from '../../mock/Projects';
import Modal from '../../shared/UIelement/Modal';
import { MODAL } from '../../mock/modalDes';
import { Content } from '../description';

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
        <h1 className="text-titleMauve font-title text-3xl my-4">Work</h1>
        <Modal
          show={showModal}
          onCancel={closeModalHandler}
          onKeyPress={closeModalHandler}
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
        <div className="flex flex-row justify-between">
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
