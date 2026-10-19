import { Injectable, signal } from "@angular/core";
import { supabase } from "../supabase.client";
import { PeliculaModel, PeliculaPatch } from "./peliculas-model";


@Injectable({providedIn : "root"})
export class PeliculasStore{
    private readonly db = supabase;
    readonly peliculas = signal<PeliculaModel[]>([]);
    readonly loading = signal(true);

    init() {
        this.load();
        this.db
        .channel('peliculas - changes')
        .on('postgres_changes',{
            event:'*', schema: 'public' ,table: 'peliculas'
        },
        payLoad => this.applyChange(payLoad)
    )
    .subscribe();
    }

    async load():Promise<void>{
        const {data, error} = await this.db
        .from('peliculas').select('*').order('id');
        if(error)throw error;
        this.peliculas.set(data ?? []);
        this.loading.set(false);
    }

    async add(nombre: string, imagen: string, sinopsis: string){
        const {data, error} = await this.db
        .from('peliculas')
        .insert({nombre, imagen, sinopsis})
        .select().single();
        if(error)throw error;
        this.peliculas.update(ps => [...ps ,data]);
    }

    async update(id : number, path : PeliculaPatch){
        const {error} = await this.db
        .from('peliculas').update(path).eq('id', id);
        if(error)throw error;
        this.peliculas.update(ps => ps.map(p => p.id === id ? {...p, ...path}:p))
    }

    async remove(id : number){
        const {error} = await this.db
        .from('peliculas').delete().eq('id', id);
        if(error)throw error;
        this.peliculas.update(ps => ps.filter(p => p.id !== id ))
    }

    private applyChange(e:any){
        switch(e.eventType){
            case 'INSERT':
                this.peliculas.update(ps => ps.some(p => p.id === e.new.id) ? ps:[...ps, e.new]);
                break;
            case 'UPDATE':
                this.peliculas.update(ps => ps.map(p => p.id === e.new.id ? e.new:p));
                break;
            case 'DELETE':
                this.peliculas.update(ps => ps.filter(p => p.id !== e.old.id))
                break;
        }
    }
}