import { Component, signal, computed, inject } from '@angular/core';
import { PeliculasModel } from 'clases/peliculas-model.ts';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink, /*TaskCard*/],
  selector: 'app-task-list',
  styleUrl: './task-list.css',
  templateUrl: './task-list.html',
})export class TaskList {

  /*private readonly store = inject(TaskStore);

  filter = signal('');

  tasks = computed(() => {
    const q = this.filter().toLowerCase();
    return this.store.tasks().filter(t => t.title.toLowerCase().includes(q))
  })

  markDone(task: TaskModel) {
    this.store.complete(task.id);
  }

  remove(id: number) {
    this.store.remove(id);
  }*/
}
