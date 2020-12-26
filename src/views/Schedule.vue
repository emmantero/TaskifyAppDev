<template>
  <div position="relative">
  <b-navbar default="true">
    <b-navbar-brand href="#">Taskify</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <!-- <b-nav-item href="#">Scheduled Tasks</b-nav-item> -->
        <!-- <b-nav-item href="#">To-Do List</b-nav-item> -->
        <b-nav-item>
            <router-link to="/schedule">Scheduled Tasks</router-link>
        </b-nav-item>
        <b-nav-item href="#">
            <router-link to="/todo">To-Do List</router-link>
        </b-nav-item>
        <!-- <b-nav-item href="#">Shared Tasks</b-nav-item> -->
        <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->
<!-- 
        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>Account</em>
          </template>
          <b-dropdown-item><router-link to="/">Sign Out</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <DayPilotScheduler id="dp" :config="config" ref="scheduler" />
</div>
</template>

<script>
import {DayPilot, DayPilotScheduler} from 'daypilot-pro-vue'

export default {
  name: 'Scheduler',
  data: function() {
    return {
      config: {
        timeHeaders: [{groupBy: "Month"}, {groupBy: "Day", format: "d"}],
        scale: "Day",
        days: DayPilot.Date.today().daysInMonth(),
        startDate: DayPilot.Date.today().firstDayOfMonth(),
        timeRangeSelectedHandling: "Enabled",
        eventHeight: 40,
        onTimeRangeSelected: args => {
          var dp = this.scheduler;
          DayPilot.Modal.prompt("Create a new event:", "Event 1").then(modal => {
            dp.clearSelection();
            if (modal.canceled) {
              return;
            }
            dp.events.add({
              start: args.start,
              end: args.end,
              id: DayPilot.guid(),
              resource: args.resource,
              text: modal.result
            });
          });
        },
        eventMoveHandling: "Update",
        onEventMoved: args => {
          this.message("Event moved: " + args.e.data.text);
        },
        eventResizeHandling: "Update",
        onEventResized: args => {
          this.message("Event resized: " + args.e.data.text);
        },
        eventClickHandling: "Enabled",
        onEventClicked: args => {
          this.message("Event clicked: " + args.e.data.text);
        },
        eventHoverHandling: "Disabled",
        treeEnabled: true,
        onBeforeEventRender: args => {
          args.data.barColor = args.data.color;
          args.data.areas = [
            { top: 6, right: 2, icon: "icon-triangle-down", visibility: "Hover", action: "ContextMenu", style: "font-size: 12px; background-color: #f9f9f9; border: 1px solid #ccc; padding: 2px 2px 0px 2px; cursor:pointer;"}
          ];
        },
        contextMenu: new DayPilot.Menu({
          items: [
            {
              text: "Delete",
              onClick: args => {
                var e = args.source;
                this.scheduler.events.remove(e);
                this.scheduler.message("Deleted.");
              }
            },
            {
              text: "-"
            },                        {
              text: "Blue",
              icon: "icon icon-blue",
              color: "#1155cc",
              onClick: args => { this.updateColor(args.source, args.item.color); }
            },
            {
              text: "Green",
              icon: "icon icon-green",
              color: "#6aa84f",
              onClick: args => { this.updateColor(args.source, args.item.color); }
            },
            {
              text: "Yellow",
              icon: "icon icon-yellow",
              color: "#f1c232",
              onClick: args => { this.updateColor(args.source, args.item.color); }
            },
            {
              text: "Red",
              icon: "icon icon-red",
              color: "#cc0000",
              onClick: args => { this.updateColor(args.source, args.item.color); }
            },

          ]
        })
      },
    }
  },
  props: {
  },
  components: {
    DayPilotScheduler
  },
  computed: {
    // DayPilot.Scheduler object - https://api.daypilot.org/daypilot-scheduler-class/
    scheduler: function () {
      return this.$refs.scheduler.control;
    }
  },
  methods: {
    loadReservations() {
      // placeholder for an AJAX call
      var data = [
        {
          id: 1,
          resource: "R1",
          start: DayPilot.Date.today().firstDayOfMonth().addDays(3),
          end: DayPilot.Date.today().firstDayOfMonth().addDays(7),
          text: "Event 1",
          color: "#1155cc"
        },
        {
          id: 2,
          resource: "R1",
          start: DayPilot.Date.today().firstDayOfMonth().addDays(9),
          end: DayPilot.Date.today().firstDayOfMonth().addDays(12),
          text: "Event 2",
          color: "#6aa84f"
        },
        {
          id: 3,
          resource: "R3",
          start: DayPilot.Date.today().firstDayOfMonth().addDays(3),
          end: DayPilot.Date.today().firstDayOfMonth().addDays(5),
          text: "Event 3",
          color: "#1155cc"
        },
        {
          id: 4,
          resource: "R3",
          start: DayPilot.Date.today().firstDayOfMonth().addDays(5),
          end: DayPilot.Date.today().firstDayOfMonth().addDays(7),
          text: "Event 4",
          color: "#6aa84f"
        },
        {
          id: 5,
          resource: "R3",
          start: DayPilot.Date.today().firstDayOfMonth().addDays(7),
          end: DayPilot.Date.today().firstDayOfMonth().addDays(9),
          text: "Event 5",
          color: "#f1c232"
        },
        {
          id: 6,
          resource: "R3",
          start: DayPilot.Date.today().firstDayOfMonth().addDays(9),
          end: DayPilot.Date.today().firstDayOfMonth().addDays(11),
          text: "Event 6",
          color: "#cc0000"
        },
      ];
      this.scheduler.update({events: data});
    },
    loadResources() {
      // placeholder for an AJAX call
      var data = [
        {
          name: "Group A", id: "GA", expanded: true, children: [
            {name: "Resource 1", id: "R1"},
            {name: "Resource 2", id: "R2"},
            {name: "Resource 3", id: "R3"},
            {name: "Resource 4", id: "R4"},
          ]
        },
        {
          name: "Group B", id: "GB", expanded: true, children: [
            {name: "Resource 5", id: "R5"},
            {name: "Resource 6", id: "R6"},
            {name: "Resource 7", id: "R7"},
            {name: "Resource 8", id: "R8"},
          ]
        }
      ];
      this.scheduler.update({resources: data});
    },
    updateColor(e, color) {
      var dp = this.scheduler;
      e.data.color = color;
      dp.events.update(e);
      dp.message("Color updated");
    }
  },
  mounted: function() {
    this.loadResources();
    this.loadReservations();

    this.scheduler.message("Welcome!");
  }
}
</script>


<style scoped>
    div{
        background-color: #FAD744;
        /* position: relative; */
    }

    b-navbar {
        background-color: #FAD744;
    }

    b-nav-item {
        color: black;
    }
</style>